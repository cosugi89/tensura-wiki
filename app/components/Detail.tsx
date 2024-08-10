import React from "react";

interface GlossaryItem {
  name: string;
  description: string;
  tags: string[];
  firstAppearance: string;
  relatedCharacters: string[];
  funFact: string;
}

interface GlossaryDetailModalProps {
  item: GlossaryItem;
  onClose: () => void;
}

const Detail: React.FC<GlossaryDetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2">Additional Information:</h3>
          <p>First Appearance: {item.firstAppearance}</p>
          <p>Related Characters: {item.relatedCharacters.join(", ")}</p>
          <p>Fun Fact: {item.funFact}</p>
        </div>
      </div>
    </div>
  );
};
export default Detail;
