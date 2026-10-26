type JsonLdValue = string | number | boolean | null | JsonLdValue[] | { [key: string]: JsonLdValue };

export type JsonLdObject = { [key: string]: JsonLdValue };

// Renders schema.org structured data. "<" is escaped to prevent breaking out of the script tag.
export function JsonLd({ data }: { data: JsonLdObject }) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
      type="application/ld+json"
    />
  );
}
