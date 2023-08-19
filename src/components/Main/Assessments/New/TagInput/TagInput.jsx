import { useState } from "react";
import "./TagInput.css";

const TagInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      if (inputValue.trim() !== "") {
        setTags([...tags, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const handleTagRemove = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <section>
      <label htmlFor="tags">Skills</label>
      <div>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
            <button onClick={() => handleTagRemove(tag)}>x</button>
          </span>
        ))}
      </div>
      <input
        type="text"
        name="tags"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Add a tag..."
      />
    </section>
  );
};

export default TagInput;
