import Person from "../Persons/Person";

const App = () => {
  const firstName = "Mohsen"
  const lastName = "Ghandali"
  const age = "35"
const clickHandler =()=>{
  console.log("Hello-World!");
}
  return (
    <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">

      <Person firstName={firstName} lastName={lastName} age={age} clickHandler={clickHandler} >
        <h1>Hello-world!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium perferendis vero animi quia laboriosam aperiam provident distinctio, in explicabo necessitatibus sunt. Quos nihil suscipit, reprehenderit iste maxime repellendus eveniet.</p>
        <button className="bg-danger text-info">read-more</button>
      </Person>

      <Person  />

    </div>
  );
};


export default App;