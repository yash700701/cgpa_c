document.getElementById('cgpa-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const semester1 = parseFloat(document.getElementById('semester1').value);
    const semester2 = parseFloat(document.getElementById('semester2').value);
    const semester3 = parseFloat(document.getElementById('semester3').value);
    const semester4 = parseFloat(document.getElementById('semester4').value);

    const cgpa = (semester1 + semester2 + semester3 + semester4) / 4;

    document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
});
