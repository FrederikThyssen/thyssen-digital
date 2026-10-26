import { Fragment } from "react";

// Hyphenated place names that must never wrap at their hyphens ("Hauts-de-" / "France").
const PLACE_PATTERN = /(Hauts-de-France|Pas-de-Calais|Saint-Quentin|Sailly-Saillisel)/;

/** Renders text, keeping hyphenated place names on one line without altering the text itself. */
export function NoBreakPlaces({ text }: { text: string }) {
  return (
    <>
      {text.split(PLACE_PATTERN).map((part, index) =>
        PLACE_PATTERN.test(part) ? (
          <span className="whitespace-nowrap" key={index}>
            {part}
          </span>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
