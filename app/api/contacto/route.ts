import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface Lead {
  nombre?: string;
  telefono?: string;
  email?: string;
  mensaje?: string;
  treatment?: string;
}

// Configuración SMTP de Gmail desde variables de entorno
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const EMAIL_TO = process.env.EMAIL_TO || "gestionimpulsodigital@gmail.com";

// Creamos el transportador de correo si las credenciales existen
const transporter =
  smtpUser && smtpPass
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })
    : null;

export async function POST(request: Request) {
  let data: Lead;
  try {
    data = (await request.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const nombre = (data.nombre ?? "").trim();
  const telefono = (data.telefono ?? "").trim();
  const email = (data.email ?? "").trim();
  const mensaje = (data.mensaje ?? "").trim();

  if (!nombre || !telefono || !email || !mensaje) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios (nombre, teléfono, email y mensaje)" },
      { status: 422 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Email inválido" },
      { status: 422 }
    );
  }

  // Registro en la consola del servidor (para depuración)
  console.log("[lead]", {
    nombre,
    telefono,
    email,
    treatment: data.treatment ?? "general",
    mensaje,
    at: new Date().toISOString(),
  });

  // Envío del mail a través de Gmail SMTP
  if (transporter && smtpUser) {
    try {
      await transporter.sendMail({
        from: `"Rena.Ser Web" <${smtpUser}>`,
        to: EMAIL_TO,
        subject: `Nuevo lead web Rena.Ser — ${data.treatment ?? "general"}`,
        text: `Se ha recibido una nueva consulta desde el sitio web:\n\n` +
              `Nombre: ${nombre}\n` +
              `Teléfono: ${telefono}\n` +
              `Email: ${email}\n` +
              `Tratamiento de interés: ${data.treatment ?? "General / Asesoría"}\n` +
              `Mensaje / Consulta: ${mensaje}\n`,
      });
      console.log(`[email] Correo enviado exitosamente via Gmail a ${EMAIL_TO}`);
    } catch (err) {
      console.error("[email] Error al enviar el correo con Gmail SMTP:", err);
      return NextResponse.json(
        { ok: false, error: "Error al enviar el correo a través de SMTP" },
        { status: 500 }
      );
    }
  } else {
    console.warn("[email] Gmail SMTP no está configurado. Por favor, definí SMTP_USER y SMTP_PASS en tu archivo .env");
    return NextResponse.json(
      { ok: false, error: "Servicio de correo no configurado" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
