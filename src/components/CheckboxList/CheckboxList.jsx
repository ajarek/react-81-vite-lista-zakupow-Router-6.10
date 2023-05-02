import React,{useState} from 'react'
import './CheckboxList.css'
const CheckboxList = ({option}) => {
  const [checkedItems, setCheckedItems] = useState({}); // obiekt do śledzenia wybranych opcji

  const handleChange = (event) => { // funkcja obsługująca zmiany w checkboxie
    setCheckedItems({
      ...checkedItems, // skopiuj aktualny stan
      [event.target.name]: event.target.checked, // aktualizuj stan wybranej opcji
    });
  };
  
  return (
    <div>
      
        <input
          type="checkbox"
          name={option}
          checked={checkedItems.option}
          onChange={handleChange}
          />
          </div>
)
}
export default CheckboxList