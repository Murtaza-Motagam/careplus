import { X } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import { useDropzone, Accept } from 'react-dropzone';
import { Controller } from 'react-hook-form';

interface FileUploadProps {
  name: string; // Name of the field for react-hook-form
  className?: string;
  control: any; // Control object from react-hook-form
  accept?: Accept; // Correctly typed accept prop
  maxSize?: number; // Max file size in bytes
}

const Uploader: React.FC<FileUploadProps> = ({
  name,
  control,
  className,
  accept = { 'image/*': [] }, // Default to image types
  maxSize = 5 * 1024 * 1024, // 5 MB limit
}) => {
  const [preview, setPreview] = useState<string | null>(null); // State for image preview

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null} // Ensure default value is null for single file
      render={({ field: { onChange, value } }) => {
        const onDrop = useCallback(
          (acceptedFiles: File[]) => {
            const file = acceptedFiles[0]; // Only handle the first file
            if (file) {
              console.log('file: ', file);
              setPreview(URL.createObjectURL(file)); // Generate preview URL
              onChange(file); // Update the field value with the single file
            }
          },
          [onChange]
        );

        const handleRemove = () => {
          setPreview(null); // Clear the preview
          onChange(null); // Clear the file from react-hook-form
        };

        const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
          onDrop,
          accept,
          maxSize,
          multiple: false, // Single file upload
        });

        return (
          <div className={`border border-dashed border-blue-400 p-6 rounded-md text-center relative ${className}`}>
            {!value && (
              <div
                {...getRootProps({
                  className: 'cursor-pointer focus:outline-none transition-all',
                })}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-blue-600">Drop the file here...</p>
                ) : (
                  <p className="text-gray-600">
                    Drag and drop a file here, or click to select one
                  </p>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  Accepted formats: {Object.keys(accept).join(', ')}
                </p>
              </div>
            )}
            {/* Image preview */}
            {preview && (
              <div className="mt-4 relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="mx-auto h-32 w-32 object-cover rounded-md border"
                />
                <button
                  type="button"
                  onClick={handleRemove}
                  className="absolute top-0 right-0 -mt-2 -mr-2 dark:bg-gray-800 dark:hover:bg-gray-900 text-blue-400 rounded-full p-1 shadow-md hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
                <p className="text-sm text-gray-600 mt-2">Preview</p>
              </div>
            )}
            {/* File information */}
            {value && (
              <div className="mt-4">
                <p className="text-sm text-gray-800">{value.name}</p>
                <p className="text-sm text-gray-500">
                  {(value.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            )}
            {/* File rejections */}
            {fileRejections.length > 0 && (
              <ul className="mt-4 space-y-2">
                {fileRejections.map(({ file, errors }, index) => (
                  <li key={index} className="text-sm text-red-600">
                    {file.name} - {errors.map((e) => e.message).join(', ')}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }}
    />
  );
};

export default Uploader;
