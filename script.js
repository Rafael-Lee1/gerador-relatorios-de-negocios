const reportForm = document.getElementById("reportForm");
const generatedReport = document.getElementById("generatedReport");

reportForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const companyName = document.getElementById("companyName").value;
    const reportContent = document.getElementById("reportContent").value;
    const reportText = `Empresa: ${companyName}\n\n${reportContent}`;
    generatedReport.textContent = reportText;
});
