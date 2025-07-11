export default function getRandomColor() {
    const colors = ["#FFFFFF", "#FF4136", "#0074D9", "#2ECC40", "#FF851B", "#B10DC9",
        "#39CCCC", "#FFDC00", "#001f3f", "#3D9970"];

    const randomNum = Math.floor(Math.random() * colors.length);

    return colors[randomNum];
}