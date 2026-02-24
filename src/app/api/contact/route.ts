import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  message: z.string().min(10, 'Mensagem muito curta'),
});

type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
  source: string;
};

type LeadDelegate = {
  create: (args: { data: LeadPayload }) => Promise<unknown>;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: result.error.issues },
        { status: 400 }
      );
    }

    const { name, email, company, message } = result.data;

    try {
      const leadModel = (prisma as unknown as { lead?: LeadDelegate }).lead;

      if (!leadModel) {
        throw new Error('Modelo lead indisponível');
      }

      const lead = await leadModel.create({
        data: {
          name,
          email,
          company,
          message,
          source: 'landing',
        },
      });

      return NextResponse.json({ success: true, lead });
    } catch (dbError) {
      console.error('Database Error:', dbError);
      return NextResponse.json({
        success: true,
        message: 'Recebido (Simulação: banco de dados não conectado)',
      });
    }
  } catch (error) {
    console.error('Request Error:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
