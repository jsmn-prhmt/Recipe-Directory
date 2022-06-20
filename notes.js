// react-router package - type : npm installl react-router-dom@5.1

// [83] 
// Home :
// {data && data.map(recipe => (
//     <h2 key={recipe.id}>{recipe.title}</h2>
//   ))}

// {data && <RecipeList recipes={data} />}

// RecipeList (card) : 
// <div>{recipe.method.substring(0, 100)}...</div>
// <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
// "link" to details-page using "recipe" component where there is "route" setup for details-page
// by extracting "id" from the route to fetch data for particular recipe 

// [84] - fetching single recipe inside Recipe
// Recipe : 
// "useParams" hook to get "id" from route : 
// const { id } = useParams()

// constructing end-point for fetching data :
// const url = 'http://localhost:3000/recipes/' + id

// [85] 
// recipe details template 
// <ul>
//   {recipe.ingredients.map(ing => <li key={ing}>ing</li>)}
// </ul>
// mapping through array of "strings" 
// key={ing} : to later to make sure "ingredients" are unique

// in css : 
// .recipe li::after {
//    content: ",";
//  }
// .recipe li:last-child::after {
//     content: ".";
//  }
// sudo-class after each "li" to inject content (,) - to comma-seperate li-tags 

// [86] 
// create recipe form 
// Create : 

// e.target = input 
// <input type="number" onChange={(e) => setCookingTime(e.target.value)}
// although type is number, still would store "string" version of the number in "setCookingTime" - sane case with any "input" data 

// [87]
// adding multiple ingredients - adding multiple items to ingredients "array"
// Create : 

//  const [newIngredient, setNewIngredient] = useState('')  : this is to add ingredient
//  const [ingredients, setIngredients] = useState([]) : this is array of all ingredients - adding new value of "newIngredient" to "ingredients"
//  const ingredientInput = useRef(null)

// if (ing && !ingredients.includes(ing)) {
//    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
// }
// setNewIngredient('')
// ingredientInput.current.focus()

// 1st "ing" to make sure "ing" has value & 2nd is to prevent adding "ing" more than once - "ing" is "key" in recipe details template & should be unique 
// to not click inside "input" to add new ingredient by using "ref"
// const ingredientInput = useRef(null) : 
// using "ref" to get handle on dom-element to use "focus" method on it to focus the input-field 

// [88]
// POST request to add to json-file inside useFetch 

// Create : 
// const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')
  
//  const handleSubmit = (e) => {
//    e.preventDefault()
//    postData({ title, ingredients, method, cookingTime: cookingTime(state) + ' minutes' })
//  }
// an object which represent data we wanna save = "postData" - would add unique id itself when saving data 

// [89] 
// redirect after submitting the recipe 
// Create : 
// not in handleSubmit & after postData (async)
// use useEffect hook : listen to when "data" changes & fire useEffect function when it does to redirect to hoempage if we have "response"
// useEffect(() => {
//    if (data) {
//        history.push('/')
//      }
//    }, [data, history])

// [90]
// in Searchbar component in handleSubmit : redirect to Search component with query parameter (?key=value)
// here "value" above is gonna be dynamic = term user puts in 
//      history.push(`/search?q=${term}`)

// then in Search component : would access that "query parameter" to try and find any recipe which includes that query 

// [91]
// search result page 
// Search : 

// const queryString = useLocation().search  
// getting "queryString" = ?q=pie

// const query = queryParams.get('q')
// would get us the value of "q" = pie 

// "data" here could be list of recipes - should map through & can use <RecipeList/> instead & pass our "data" as prop : recipe={data}

// [92]
// in case there is not recipe for our keyword - dynamic template 
// RecipeList : 
// Search : {data && <RecipeList recipes={data} />}
// if "data" is an empty array (not finding recipe) & would still show "RecipeList" - it is different from being "null"
// in this case return different template 
