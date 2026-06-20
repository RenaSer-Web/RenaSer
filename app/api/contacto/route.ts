import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface Lead {
  nombre?: string;
  telefono?: string;
  email?: string;
  mensaje?: string;
  treatment?: string;
}

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

  if (!nombre || !telefono) {
    return NextResponse.json(
      { ok: false, error: "Faltan nombre o teléfono" },
      { status: 422 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Email inválido" },
      { status: 422 }
    );
  }

  // ---------------------------------------------------------------------------
  // TODO (integración): enviá este lead a donde prefieras. Opciones:
  //   1) Email con Resend / Nodemailer / SendGrid.
  //   2) Google Sheets, Airtable o tu CRM vía su API.
  //   3) Notificación a WhatsApp Business API.
  // Por ahora se registra en consola del servidor para no perder ningún lead.
  // Ejemplo con Resend (instalar `resend` y setear RESEND_API_KEY):
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "web@renaserhidroterapia.com",
  //     to: "renaserterapiacolonica@gmail.com",
  //     subject: `Nuevo lead web — ${data.treatment ?? "general"}`,
  //     text: `Nombre: ${nombre}\nTel: ${telefono}\nEmail: ${email}\nConsulta: ${data.mensaje ?? ""}`,
  //   });
  // ---------------------------------------------------------------------------
  console.log("[lead]", {
    nombre,
    telefono,
    email,
    treatment: data.treatment ?? "general",
    mensaje: data.mensaje ?? "",
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
