export default ({ fields }) => {
	for (const field of fields) {
		field.variant = "outlined";
		if (!field.label) field.label = field.name;

		// if customize
		// const type = field.fieldType.toLowerCase();
		// switch (type) {
		//     case "string":
		//         field.variant = "outlined";
		//         field.label = field.name;
		//         break;
		//     case "int":
		//         field.variant = "outlined";
		//         field.label = field.name;
		//         break;
		//     case "boolean":
		//         field.label = field.name;
		//         break;
		//     case "datetime":
		//         field.variant = "outlined";
		//         field.label = field.name;
		//         break;
		//     case "relation":
		//         field.variant = "outlined";
		//         field.label = field.name;
		//         break;
		// }
	}
	return fields;
};
