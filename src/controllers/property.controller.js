import properties from '../data/properties';

export default class PropertyController {
  dataPath = "data/properties.json";
  properties = [];
  constructor() {
    this.properties = (properties);
  }

  getAllProperties = () => this.properties;
  getFilteredProperties = (text) =>
    this.properties.filter(
      (property) =>
        property.name.toLowerCase().includes(text.toLowerCase()) || property.description.toLowerCase().includes(text.toLowerCase())
    );
}
