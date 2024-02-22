
const TaskForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="title">Task name</label>
      <input
        id="title"
        type="text"
        placeholder="Task name"
        className="p-2 rounded-lg"
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        placeholder="Description"
        className="p-2 rounded-lg"
      />
      <label htmlFor="category">Category</label>
      <select id="category" className="p-2 rounded-lg">
        <option value="URGENT">Urgent</option>
        <option value="MODERATE">Moderate</option>
        <option value="MINOR">Minor</option>
      </select>
      <label htmlFor="dealine">Deadline</label>
      <input
        id="dealine"
        type="datetime-local"
        placeholder="Deadline"
        className="p-2 rounded-lg"
      />
      <button
        type="submit"
        className="w-1/4 bg-blue-500 p-2 mx-auto rounded-lg transition-all hover:bg-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
