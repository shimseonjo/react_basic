// export default function List(){
//   const fruits = ['apple','orange','banana','cocount','pineapple']
//   fruits.sort();
//   const listItem = fruits.map(fruit => <li>{fruit}</li>)
//   return(
//     <ul>
//       {listItem}
//     </ul>
//   )
// }

// export default function List(){

//   const fruits = [{id:1,name:'apple',calories:95},
//                   {id:2,name:'orange',calories:45},
//                   {id:3,name:'banana',calories:105},
//                   {id:4,name:'cocount',calories:159},
//                   {id:5,name:'pineapple',calories:37}];

//   const listItem = fruits.map((fruit,index) => <li key={index}>{fruit.name}</li>)

//   return(
//     <ul>
//       {listItem}
//     </ul>
//   )
// }

// export default function List(){
//   const fruits = [{id:1, name:'apple', calories:95},
//                   {id:2, name:'orange', calories:45},
//                   {id:3, name:'banana', calories:105},
//                   {id:4, name:'cocount', calories:159},
//                   {id:5, name:'pineapple', calories:37}];

//   // 오름차순(문자열)
//   fruits.sort((a,b) => a.name.localeCompare(b.name));
//   // 내림차순(문자열)
//   fruits.sort((a,b) => b.name.localeCompare(a.name));
//   // 오름차순(숫자)
//   fruits.sort((a,b) => a.calories - b.calories);
//   // 내림차순(숫자)
//   fruits.sort((a,b) => b.calories - a.calories);

//   // const listItem = fruits.map(fruit => <li key={fruit.id}>
//   //                                       {fruit.name}: &nbsp; 
//   //                                       <b>{fruit.calories}</b>
//   //                                     </li>);

//   // 100칼로리 미만
//   const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
//   // 100칼로리 이상 
//   const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
  
//   const listItem = highCalFruits.map(highCalFruit => 
//                                         <li key={highCalFruit.id}>
//                                           {highCalFruit.name}: &nbsp; 
//                                           <b>{highCalFruit.calories}</b>
//                                         </li>);

//     return(
//       <ul>
//         {listItem}
//       </ul>
//   )
// }
import PropTypes from 'prop-types';
import  './List.css'

export default function List(props){

  const category = props.category;
  const itemList = props.items;

  const listItem = itemList.map(item => <li key={item.id}>
                                          {item.name}: &nbsp; 
                                          <b>{item.calories}</b>
                                        </li>);
  return(
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItem}</ul>
    </>
  )
}

List.propTypes ={
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number})),
}
List.defaultProps = {
  category: "Category",
  item:[],
}

