import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ob from './Autocomplete.module.css'

export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  };

  

  onChange = (e) => {
    console.log('onChanges');

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
    this.props.updateData(e.currentTarget.innerText)
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
      this.props.updateData(this.state.filteredOptions[activeOption])
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput }
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className={ob.options}>
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {

                className = ob.option_active;
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className={ob.no_options}>
            <em>Отсутствует в списке  :(</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="search">
          <input
            type="search"
            placeholder={this.props.placehold}
            className={ob.input}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

export default Autocomplete;

// import React, { Component, Fragment } from "react";
// import './style.css'
// import PropTypes from "prop-types";

// export class Autocomplete extends Component {
//     static propTypes = {
//         suggestions: PropTypes.instanceOf(Array).isRequired
//     };



//     state = {
//         // The active selection's index
//         activeSuggestion: 0,
//         // The suggestions that match the user's input
//         filteredSuggestions: [],
//         // Whether or not the suggestion list is shown
//         showSuggestions: false,
//         // What the user has entered
//         userInput: ""
//     };


//     onChange = (e) => {
//         console.log('onChanges');

//         const { suggestions } = this.props;
//         const userInput = e.currentTarget.value;

//         // Filter our suggestions that don't contain the user's input
//         const filteredSuggestions = suggestions.filter(
//             (suggestionName) =>
//                 suggestionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
//         );

//         this.setState({
//             activeSuggestion: 0,
//             filteredSuggestions,
//             showSuggestions: true,
//             userInput: e.currentTarget.value
//         });
//     };

//     onClick = (e) => {
//         this.setState({
//             activeSuggestion: 0,
//             filteredSuggestions: [],
//             showSuggestions: false,
//             userInput: e.currentTarget.innerText
//         });
//     };

//     onKeyDown = (e) => {
//         const { activeSuggestion, filteredSuggestions } = this.state;

//         // User pressed the enter key
//         if (e.keyCode === 13) {
//             this.setState({
//                 activeSuggestion: 0,
//                 showSuggestions: false,
//                 userInput: filteredSuggestions[activeSuggestion]
//             });
//         }
//         // User pressed the up arrow
//         else if (e.keyCode === 38) {
//             if (activeSuggestion === 0) {
//                 return;
//             }

//             this.setState({ activeSuggestion: activeSuggestion - 1 });
//         }
//         // User pressed the down arrow
//         else if (e.keyCode === 40) {
//             if (activeSuggestion - 1 === filteredSuggestions.length) {
//                 return;
//             }

//             this.setState({ activeSuggestion: activeSuggestion + 1 });
//         }
//     };

//     render() {
//         const {
//             onChange,
//             onClick,
//             onKeyDown,
//             state: {
//                 activeSuggestion,
//                 filteredSuggestions,
//                 showSuggestions,
//                 userInput
//             }
//         } = this;

//         let suggestionsListComponent;

//         if (showSuggestions && userInput) {
//             if (filteredSuggestions.length) {
//                 suggestionsListComponent = (
//                     <ul class="suggestions">
//                         {filteredSuggestions.map((suggestionName, index) => {
//                             let className;

//                             // Flag the active suggestion with a class
//                             if (index === activeSuggestion) {
//                                 className = "suggestion-active";
//                             }

//                             return (
//                                 <li className={className} key={suggestionName} onClick={onClick}>
//                                     {suggestionName}
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 );
//             } else {
//                 suggestionsListComponent = (
//                     <div class="no-suggestions">
//                         <em>No suggestions, you're on your own!</em>
//                     </div>
//                 );
//             }
//         }

//         return (
//             <React.Fragment>
//                 <input
//                     type="text"
//                     onChange={onChange}
//                     onKeyDown={onKeyDown}
//                     value={userInput}
//                 />
//                 {suggestionsListComponent}
//             </React.Fragment>
//         );
//     }
// }

// export default Autocomplete;
