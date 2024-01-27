import VCalendar from "../components/VCalendar.vue";

export default ({ fields }) => {
	for (const field of fields) {
		const type = field.fieldType.toLowerCase();
		switch (type) {
			case "string":
				field.component = "VTextField";
				break;
			case "int":
				field.component = "VTextField";
				field.type = "number";
				break;
			case "boolean":
				field.component = "VCheckbox";
				field.modelValue = !!field.modelValue;
				break;
			case "datetime":
				field.component = VCalendar;
				break;
			case "relation":
				field.component = "VAutocomplete";
				const values = field.values.map((value) =>
					Object.values(value).join(" - "),
				);
				field.items = values;
				break;
			default:
				console.warn(field.fieldType, "type is not implemented yet");
		}
	}
	return fields;
};
