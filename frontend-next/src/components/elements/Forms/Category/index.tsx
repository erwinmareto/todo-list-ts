const CategoryForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="title">Category name</label>
      <input id="title" type="text" placeholder="Category name" className="p-2 rounded-lg" />
      <button type="submit" className="w-1/4 bg-blue-500 p-2 mx-auto rounded-lg transition-all hover:bg-blue-300">Submit</button>
    </form>
  );
};

export default CategoryForm;
