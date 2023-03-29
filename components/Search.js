import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const { push } = useRouter();

  function searchHandler(evt) {
    if (evt.key === "Enter") {
      if (searchQuery.length) {
        push(`/products/search/${searchQuery}`);
      } else {
        push("/products");
      }
    }
  }

  return (
    <div className="input-group mb-3" style={{ width: "50%" }}>
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Suchen"
        aria-label="Suchen"
        value={searchQuery}
        onChange={(evt) => setSearchQuery(evt.target.value)}
        onKeyDown={searchHandler}
      />
    </div>
  );
}

export default Search;
