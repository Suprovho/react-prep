# UPDATING STATE -

## when ever we update the state make sure that we create a new reference with updated value and return it not reference to the original directly or mutate it which will not trigger re-render cycle as react will treat as no changes are made.

## operation such as making shallow copy or by using callback or by map,filter,etc which will trigger the re render as new array or obj is returned or it is not directly mutating it.

### This approach is used in most react codes.

- EXAMPLE ->

``` const [data, setData] = useState([
{ country: "India", selected: false },
{ country: "Japan", selected: false },
{ country: "America", selected: false },
{ country: "Russia", selected: false },
]);

const handelCheck = (index) => {
setData((prevData) => {
const updatedData = [...prevData];
updatedData[index] = { ...updatedData[index], selected: !updatedData[index].selected }; // another way but logic is same.
return updatedData;       
});
};

const handelDelete = (index) => {
data.splice(index,1);
setData([...data]); // shallow copy. to make changes that are done without doing this then react will point to old reference.
//This shallow copy ensures that setData is working with a "new" array reference, triggering a re-render
}; 
```


