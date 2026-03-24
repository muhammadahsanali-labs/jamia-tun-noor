/* Jamia-Tun-Noor Portal — login.js
   Dynamic Role Detection & Redirect Logic [cite: 181-186] */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('portalLoginForm');
    const loginTitle = document.getElementById('loginTitle');
    const loginSubtitle = document.getElementById('loginSubtitle');
    const roleIcon = document.getElementById('roleIcon');

    // 1. Detect Role from URL (e.g., login.html?role=student) 
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role'); // 'student' or 'teacher'

    // 2. Update UI based on Role
    if (role === 'student') {
        loginTitle.textContent = "Student Login";
        loginSubtitle.textContent = "Access your results and attendance";
        roleIcon.textContent = "🎓";
    } else if (role === 'teacher') {
        loginTitle.textContent = "Teacher Login";
        loginSubtitle.textContent = "Manage records and check logs";
        roleIcon.textContent = "🕌";
    }

    // 3. Handle Form Submission [cite: 181]
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const idInput = document.getElementById('userId').value.trim().toUpperCase();

            // 4. Validation & Redirection Logic [cite: 184-186]
            if (role === 'student') {
                if (idInput.startsWith('S')) {
                    // Success: Redirect to Student Dashboard
                    window.location.href = `student.html?id=${idInput}`;
                } else {
                    alert("Access Denied: Students must use an ID starting with 'S' (e.g., S001)");
                }
            }
            else if (role === 'teacher') {
                if (idInput.startsWith('T')) {
                    // Success: Redirect to Teacher Dashboard
                    window.location.href = `teacher.html?id=${idInput}`;
                } else {
                    alert("Access Denied: Teachers must use an ID starting with 'T' (e.g., T001)");
                }
            } else {
                alert("Error: No role selected. Please return to the portal entry page.");
            }
        });
    }
});