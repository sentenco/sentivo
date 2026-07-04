import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import Flashcards from "./Flashcards";
import AlphabetFlashcards from "./AlphabetFlashcards";

// Add new content types here as new tool pages are built.
const PAGE_BY_CONTENT_TYPE = {
  stress_pairs: Flashcards,
  alphabet: AlphabetFlashcards,
};

export default function ToolRouter() {
  const { toolId } = useParams();
  const [contentType, setContentType] = useState(undefined); // undefined = loading
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadType() {
      setContentType(undefined);
      setNotFound(false);
      const { data, error } = await supabase
        .from("tools")
        .select("content_type")
        .eq("id", toolId)
        .single();
      if (!isMounted) return;
      if (error || !data || !data.content_type) {
        setNotFound(true);
      } else {
        setContentType(data.content_type);
      }
    }
    loadType();
    return () => { isMounted = false; };
  }, [toolId]);

  if (contentType === undefined && !notFound) {
    return <p style={{ padding: 40, fontFamily: "sans-serif" }}>Loading…</p>;
  }

  const PageComponent = PAGE_BY_CONTENT_TYPE[contentType];

  if (notFound || !PageComponent) {
    return (
      <div style={{ padding: 40, fontFamily: "sans-serif", textAlign: "center" }}>
        <h2>This tool isn't available yet</h2>
        <p style={{ opacity: 0.6, marginTop: 8 }}>
          <a href="/library">Back to Library</a>
        </p>
      </div>
    );
  }

  return <PageComponent />;
}
