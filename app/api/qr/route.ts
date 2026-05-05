import QRCode from "qrcode";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");

  if (!text) {
    return new Response("Missing text query parameter", { status: 400 });
  }

  const svg = await QRCode.toString(text, {
    errorCorrectionLevel: "M",
    margin: 1,
    type: "svg",
    width: 240,
    color: {
      dark: "#071015",
      light: "#ffffff",
    },
  });

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
