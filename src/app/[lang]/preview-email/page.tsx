import React from 'react';
import { generateEmailHtml } from '@/lib/email-templates';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'nl' }, { lang: 'de' }]
}

export default async function PreviewEmailPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedParams = await searchParams;
    const name = typeof resolvedParams.name === 'string' ? resolvedParams.name : 'Jan de Vries';
    const cropCategory = typeof resolvedParams.category === 'string' ? resolvedParams.category : 'algemeen';
    const crop = typeof resolvedParams.crop === 'string' ? resolvedParams.crop : 'tomaat';
    const otherCrop = typeof resolvedParams.other === 'string' ? resolvedParams.other : '';

    const html = generateEmailHtml({
        name,
        cropCategory,
        crop,
        otherCrop,
        unsubscribeUrl: '#'
    });

    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}
