import React from 'react';

function NewSkillForm() {
  return(
    <div>
      <form className="NewSkillForm">
        <label>Skill</label>
        <input type="text" id="skill" name="skill"></input>
        <label for="level">Level</label>
        <select name="level" id="level">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="button" value="ADD SKILL"></input>
      </form>
    </div>
  )
}

export default NewSkillForm;