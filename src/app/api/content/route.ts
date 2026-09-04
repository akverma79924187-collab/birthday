import { NextResponse } from 'next/server';
import { getBirthdayContent } from '@/lib/content-store';

export async function GET() {
  try {
    const content = await getBirthdayContent();

    return NextResponse.json({
      success: true,
      source: content.source,
      data: content.data
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch content data', error: (error as Error).message },
      { status: 500 }
    );
  }
}
