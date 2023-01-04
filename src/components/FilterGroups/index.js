import {useState} from 'react'
import './index.css'

const FilterGroups = props => {
  const {
    changeSalary,
    changeEmployment,
    salaryRangesList,
    employmentTypesList,
    employmentId,
    salaryId,
    setEmploymentId,
    setSalaryId,
  } = props

  const [isChecked, setIsChecked] = useState(true)

  const onChangeCheckbox = event => {
    changeEmployment(event.target.value)
  }

  const onChangeRange = salary => {
    changeSalary(salary.salaryRangeId)
  }

  return (
    <div className="filter">
      <div className="filter-group">
        <h1 className="types-heading">Types of Employment</h1>
        <ul className="categories list">
          {employmentTypesList.map(type => (
            <li key={type.employmentTypeId}>
              <input
                type="checkbox"
                className="checkbox"
                value={type.employmentTypeId}
                onChange={onChangeCheckbox}
                id="checkBoxId"
              />
              <label className="labelCheckbox" htmlFor="checkBoxId">
                {type.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-range-group">
        <h1 className="types-range-heading">Salary Range</h1>
        <ul className="range list">
          {salaryRangesList.map(salary => (
            <li key={salary.salaryRangeId}>
              <input
                type="radio"
                className="radio"
                value={salary.salaryRangeId}
                onChange={onChangeRange}
                id="rangeId"
              />
              <label className="labelRange" htmlFor="rangeId">
                {salary.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterGroups
