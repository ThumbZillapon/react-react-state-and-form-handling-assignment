import {useState} from "react";

function ProductForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setHasSubmitted(true);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isEmailValid = emailRegex.test(email);
    if (!name || !image || !price || !description || !isEmailValid) {
      return;
    }
    const data = {
      name: name,
      image: image,
      price: price,
      description: description,
      email: email,
    };

    alert(JSON.stringify(data));
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value = {name}
            onChange={(event) => {setName(event.target.value)}}
            
          />
        </label>
        {hasSubmitted && !name && (
          <div className="error-message">Name is required.</div>
        )}
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value = {image}
            onChange={(event) => {setImage(event.target.value)}}
            
          />
        </label>
        {hasSubmitted && !image && (
          <div className="error-message">Image URL is required.</div>
        )}
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value = {price}
            onChange={(event) => {setPrice(event.target.value)}}
            
          />
        </label>
        {hasSubmitted && !price && (
          <div className="error-message">Price is required.</div>
        )}
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value = {description}
            onChange={(event) => {setDescription(event.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
        {hasSubmitted && !description && (
          <div className="error-message">Description is required.</div>
        )}
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            value = {email}
            onChange={(event) => {setEmail(event.target.value)}}
          />
        </label>
        {hasSubmitted && !email && (
          <div className="error-message">Email is required.</div>
        )}
        {hasSubmitted && email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) && (
          <div className="error-message">Invalid email format</div>
        )}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
