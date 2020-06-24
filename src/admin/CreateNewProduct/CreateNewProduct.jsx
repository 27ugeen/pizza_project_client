import React, {useState, useEffect} from "react";
import styles from "./CreateNewProduct.module.css";
import Select from "react-select";
import {getAllIngredients, postNewProduct, postImage} from "../../services/api";

const categories = {
    pizza: "pizza",
    drinks: "drinks",
    sides: "sides",
    desserts: "desserts"
};

const options = [
    {value: categories.pizza, label: "Pizza"},
    {value: categories.drinks, label: "Drinks"},
    {value: categories.sides, label: "Sides"},
    {value: categories.desserts, label: "Desserts"},
];

const pizzaCategories = [
    // {value: "bestPrice", label: "Best price"},
    {value: "classic", label: "Classic"},
    {value: "branded", label: "Branded"},
    {value: "premium", label: "Premium"}
];

const CreateNewProduct = ({visible, closeModal}) => {
        const [category, changeCategory] = useState(options[0]);
        const [subCategory, changeSubCategory] = useState(pizzaCategories[0]);
        // const handle
        const [ingredients, setIngredients] = useState([]);
        const [ukrName, setUkrName] = useState("");
        const [enName, setEnName] = useState("");
        const [ruName, setRuName] = useState("");
        const [price, setPrice] = useState("");
        const [M, setM] = useState("");
        const [L, setL] = useState("");
        const [XL, setXL] = useState("");
        const [description, setDescription] = useState("");
        useEffect(() => {
                getAllIngredients().then(data => {
                    if (JSON.stringify(data) !== JSON.stringify(ingredients)) setIngredients(data);
                });
            }
        );
        const [activeIngredients, setActiveIngredients] = useState([]);
        const handleCheckboxChange = (e) => {
            e.persist();
            if (e.target.checked) {
                return setActiveIngredients(prev => [...prev, e.target.value]);
            }
            setActiveIngredients(prev => prev.filter(el => el !== e.target.value));
        };

        const submitForm = async e => {
            e.persist();
            e.preventDefault();
            let res = await postImage(e.target.querySelector("#image").files[0])
            const href = res.data.image.file;
            const product = {
                categories: category.value,
                currency: "грн",
                images: href,
                name: {
                    ukr: ukrName,
                    en: enName,
                    ru: ruName,
                },
                likes: 0,
                sku: 0,
                description: description,
            };
            if (category.value === categories.pizza) {
                product.ingredients = activeIngredients;
                product.subcategory = subCategory.value;
                product.price = {
                    M: M,
                    L: L,
                    XL: XL
                };
            } else {
                product.price = {price};
            }
            res = await postNewProduct(product);
            alert(res.data.status);
        };
        return (
            visible ?
                <div className={styles.modal}>
                    <div className={styles.blackLayer} onClick={closeModal}/>
                    <form onSubmit={submitForm} className={styles.applyForm}>
                        <Select className={styles.select} value={category} onChange={changeCategory} options={options}/>
                        <Select className={styles.select} value={category.value === categories.pizza ? subCategory : null}
                                onChange={changeSubCategory} options={pizzaCategories}
                                isDisabled={category.value !== categories.pizza}/>
                        <label className={styles.inputLabel}>
                            <h4>Ukr Name</h4>
                            <input type="text" value={ukrName} onChange={e => setUkrName(e.target.value)}/>
                        </label>
                        <label className={styles.inputLabel}>
                            <h4>En Name</h4>
                            <input type="text" value={enName} onChange={e => setEnName(e.target.value)}/>
                        </label>
                        <label className={styles.inputLabel}>
                            <h4>Ru Name</h4>
                            <input type="text" value={ruName} onChange={e => setRuName(e.target.value)}/>
                        </label>
                        {category.value === categories.pizza ?
                            <>
                            <label className={styles.inputLabel}>
                                <h4>M</h4>
                                <input type="text" value={M} onChange={e => setM(e.target.value)}/>
                            </label>

                            <label className={styles.inputLabel}>
                                <h4>L</h4>
                                <input type="text" value={L} onChange={e => setL(e.target.value)}/>
                            </label>

                            <label className={styles.inputLabel}>
                            <h4>XL</h4>
                            <input type="text" value={XL} onChange={e => setXL(e.target.value)}/>
                            </label>
                            </>

                            :

                            <label className={styles.inputLabel}>
                            <h4>Price</h4>
                            <input type="text" value={price} onChange={e => setPrice(e.target.value)}/>
                            </label>
                        }

                        <label className={styles.inputLabel}>
                            <h4>Description</h4>
                            <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                        </label>

                        <label className={styles.inputLabel}>
                            <h4>Image</h4>
                            <input type="file" id="image"/>
                        </label>
                        <div className={styles.ingredientsContainer}>
                            {category.value === categories.pizza &&
                            ingredients.map(i =>
                                <label key={i._id} className={styles.ingredient}>
                                    {i.name["ru"]}
                                    <input onClick={handleCheckboxChange} type="checkbox" id={i._id} value={i._id}/>
                                </label>
                            )}
                        </div>
                        <button type="Submit">Send</button>
                    </form>
                </div>
                : null
        );
    }
;

export default CreateNewProduct;