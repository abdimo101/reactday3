import React, {useState} from 'react';

const ContactForm = () => {
  const initialState = {name: "", age: "", email: ""};
 
  const [person, setPerson] = useState(initialState)

  const handleSubmit = (evt) => {
      evt.preventDefault()
      alert(JSON.stringify(person))
  }

  const handleInput = (event) => {
      event.preventDefault()
      const target = event.target
      const id = target.id;
      const value = target.value;
      console.log(id + value)
    {/*
        person[id] = value // Gør det samme som switch nedenunder
    */} 
      switch(id){
          case "name": person.name = value; break;
          case "age": person.age = value; break;
          case "email": person.email = value; break;
          default: break;
      }


      
      setPerson({...person})
  }
  
  return (
    <div style={{marginTop:25}}>
      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input id="name" type="text" 
               placeholder="Name" value={person.name}/>
        <br/>
        <input id="age" type="number" 
               placeholder="Age" value={person.age} />
        <br/>
        <input id="email" type="text" 
                placeholder="email" value={person.email}/>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
      </form>

      Indhold af person objekt: {JSON.stringify(person)}
    </div>
  );
}

export default ContactForm;