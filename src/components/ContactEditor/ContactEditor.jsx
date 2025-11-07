import styles from "./ContactEditor.module.scss";

export const ContactEditor = function ({ onAdd }) {
	const handleSubmit = (evt) => {
		evt.preventDefault();

		const form = evt.currentTarget;
		const name = form.elements.name.value;
		const number = form.elements.number.value;

		const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
		const numberPattern = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

		if (!namePattern.test(name)) {
			alert(form.elements.name.getAttribute("title"));
			form.reset();
			return;
		}

		if (!numberPattern.test(number)) {
			alert(form.elements.number.getAttribute("title"));
			form.reset();
			return;
		}

		onAdd(name, number);

		form.reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit} className={styles["contact-editor"]}>
				<p htmlFor="name" className={styles["contact-editor__label"]}>
					name
				</p>
				<input
					type="text"
					name="name"
					className={styles["contact-editor__input"]}
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					// pattern="/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/"
					required
				/>

				<p htmlFor="name" className={styles["contact-editor__label"]}>
					number
				</p>
				<input
					type="text"
					name="number"
					className={styles["contact-editor__input"]}
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					// pattern="/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/"
					required
				/>

				<button type="submit" className={styles["contact-editor__button"]}>
					add
				</button>
			</form>
		</>
	);
};
