import React from 'react';
import ContactInfo from './ContactInfo';
import update from 'react-addons-update';
import ContactCreator from './ContactCreator';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      contactData: [
        {name: "Abet", phone: "010-0000-0001"},
        {name: "Betty", phone: "010-0000-0002"},
        {name: "Charlie", phone: "010-0000-0003"},
        {name: "David", phone: "010-0000-0004"}
      ],
      selectedKey: -1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  _insertContact(name, phone) {
    let newState = update(this.state, {
      contactData: {
        $push: [{"name": name, "phone": phone}]
      }
    });
    this.setState(newState);
  }

  _onSelect(key) {
    if (key == this.state.selectedKey) {
      console.log("key selection is cancelled");
      this.setState({
        selectedKey: -1
      });
      return;
    }

    this.setState({
      selectedKey: key
    });
    console.log(key + " is selected");
  }

  _isSelected(key) {
    if (this.state.selectedKey == key) {
      return true;
    } else {
      return false;
    }
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  render() {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
        }
      );
      return data.map((contact, i) => {
        return (
          <ContactInfo name={contact.name} phone={contact.phone} key={i}
            contactKey={i}
            isSelected={this._isSelected.bind(this)(i)}
            onSelect={this._onSelect.bind(this)}/>
        );
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.handleChange}/>
        <ul>
          {
            mapToComponents(this.state.contactData)
          }
        </ul>
        <ContactCreator onInsert={this._insertContact.bind(this)}/>
      </div>
    );
  }
}

export default Contacts;
