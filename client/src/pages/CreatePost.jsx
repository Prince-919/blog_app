import { Button, FileInput, Select, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const { loading } = useSelector((state) => state.user);

  return (
    <div className="min-h-screen max-w-3xl mx-auto p-3">
      <h1 className="text-center text-3xl my-7 font-semibold">Create Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
            <option value="nodejs">Node.js</option>
            <option value="mongodb">Mongo DB</option>
            <option value="java">Java</option>
            <option value="html">Html</option>
            <option value="css">Css</option>
            <option value="tailwindcss">Tailwind Css</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-dotted border-green-500 p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            className="gradient-bg outline-none"
            size={"sm"}
            outline
          >
            {loading ? (
              <>
                <HashLoader size={20} />
                <span className="pl-3">Uploading...</span>
              </>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
        />
        <Button type="submit" className="gradient-bg border-none">
          {loading ? (
            <>
              <HashLoader size={20} />
              <span className="pl-3">Publishing...</span>
            </>
          ) : (
            "Publish"
          )}
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
