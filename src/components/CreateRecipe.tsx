import { Image, Plus } from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const CreateRecipe = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim()) {
      setTags([...tags, e.currentTarget.value.trim()]);
      e.currentTarget.value = ""; // Clear the input field
    }
  };

  const handleAddIngredient = () => {
    if (currentIngredient.trim()) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient(""); // Clear the input field
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6 p-0 md:p-4">
      {/* Image Upload */}
      <div className="flex h-full w-full flex-col items-start justify-between gap-5 md:flex-row">
        <div className="h-[500px] w-full rounded-lg border-2 border-dashed border-gray-400 p-6 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="flex h-full w-full cursor-pointer items-center justify-center"
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                className="mx-auto h-full w-full object-contain"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                <Image size={40} />
                <span className="text-gray-500">Click to upload an image</span>
              </div>
            )}
          </label>
        </div>
        <div className="flex h-full w-full flex-col justify-start gap-5">
          {/* Title */}
          <Input
            type="text"
            placeholder="Title"
            className="w-full rounded-lg border border-gray-300 p-2"
          />
          {/* Small description */}
          <Input
            type="text"
            placeholder="Small description"
            className="w-full rounded-lg border border-gray-300 p-2"
          />

          {/* Tags */}
          <div>
            <Input
              type="text"
              placeholder="Add a tag and press Enter"
              onKeyUp={handleTagKeyPress}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-blue-600"
                >
                  {tag}
                  <button
                    onClick={() => handleRemoveTag(index)}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Add an ingredient"
                value={currentIngredient}
                onChange={(e) => setCurrentIngredient(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2"
              />
              <Button
                onClick={handleAddIngredient}
                variant="outline"
                size="icon"
                className="bg-sky-600 text-white hover:bg-sky-700 hover:text-white"
              >
                <Plus />
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-2">
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="flex w-fit items-center justify-between space-x-3 border px-3"
                >
                  <p>{ingredient}</p>
                  <button
                    onClick={() => handleRemoveIngredient(index)}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <Textarea
            placeholder="Type procedure of the repice"
            rows={10}
            className="w-full rounded-lg border border-gray-300 p-2"
          ></Textarea>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
