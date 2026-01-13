
export const formatWhatsIncluded = (items) => {
    let text = "";
    for (const item of items) {
        text += item + "/";
    }

    return text;
};

export const whatsIncludesStringToArray = (str) => {
    const arr = str.split("/");
    arr.pop();

    return arr;
};

export const departDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = (today.getMonth() + 1).toString().padStart(2, "0");
    const dd = (today.getDate()).toString().padStart(2, "0");

    const date = `${yyyy}-${mm}-${dd}`;

    return date;
}
