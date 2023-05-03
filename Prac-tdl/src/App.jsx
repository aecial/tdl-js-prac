function App() {
  return (
    <>
      <form className="new-item-form">
        <div>
          <label htmlFor="item">New Input</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h4>To Do List:</h4>
    </>
  )
}
export default App;