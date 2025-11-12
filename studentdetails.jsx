import React from "react";

const profile = {
  name: "John Anderson",
  role: "Student",
  dob: "15/04/2002",
  gender: "Male",
  mobile: "+91 9876543210",
  email: "john@demo.com",
  address: "DFGH, Mumbai",
  religion: "Christian",
  category: "General",
  blood: "O+",
  father: "Michael Anderson",
  mother: "Lisa Anderson",
  fatherOcc: "Engineer",
  motherOcc: "Teacher"
};

const academics = [
  { label: "10th School", value: "St. Xavier School" },
  { label: "10th Board", value: "ICSE" },
  { label: "10th Percentage", value: "95%" },
  { label: "12th School", value: "Anderson Jr. College" },
  { label: "12th Board", value: "CBSE" },
  { label: "12th Percentage", value: "92%" },
];

const stats = [
  { label: "Your Score", value: "90%" },
  { label: "Tasks Left", value: "8" },
  { label: "Completed", value: "5" },
  { label: "Total Marks", value: "370/400" }
];

const tasks = [
  {
    subject: "Maths",
    date: "2025-09-12",
    dept: "Science",
    status: "Done",
    marks: "75/80",
    action: "View"
  },
  {
    subject: "Physics",
    date: "2025-09-10",
    dept: "Science",
    status: "Not Done",
    marks: "63/80",
    action: "View"
  },
  {
    subject: "English",
    date: "2025-09-11",
    dept: "Arts",
    status: "Done",
    marks: "80/80",
    action: "View"
  },
  {
    subject: "History",
    date: "2025-09-09",
    dept: "Arts",
    status: "Not Done",
    marks: "74/80",
    action: "View"
  }
];

export default function StudentDashboard() {
  return (
    <div style={{ padding: "40px", background: "#fafbff" }}>
      <h2>Student Profile</h2>
      <div style={{ display: "flex", gap: "24px" }}>
        {/* Profile Card */}
        <div style={{
          background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 6px #e6e8ef", minWidth: "320px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="profile" style={{ width: 70, height: 70, borderRadius: "50%", objectFit: "cover" }}/>
            <div>
              <div style={{ fontSize: 18 }}>{profile.name}</div>
              <div style={{ fontSize: 13, color: "#888" }}>{profile.role}</div>
            </div>
          </div>
          <div style={{ marginTop: 18 }}>
            <div>Date of Birth: <b>{profile.dob}</b></div>
            <div>Gender: <b>{profile.gender}</b></div>
            <div>Mobile: <b>{profile.mobile}</b></div>
            <div>Email: <b>{profile.email}</b></div>
          </div>
        </div>
        {/* Details Card */}
        <div style={{
          background: "#fff", borderRadius: "12px", padding: "24px", boxShadow: "0 1px 6px #e6e8ef", flex: 1
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "18px 48px" }}>
            <div>
              <div><label>Address:</label> <b>{profile.address}</b></div>
              <div><label>Religion:</label> <b>{profile.religion}</b></div>
              <div><label>Category:</label> <b>{profile.category}</b></div>
              <div><label>Blood Group:</label> <b>{profile.blood}</b></div>
            </div>
            <div>
              <div><label>Father:</label> <b>{profile.father}</b></div>
              <div><label>Occupation:</label> <b>{profile.fatherOcc}</b></div>
              <div><label>Mother:</label> <b>{profile.mother}</b></div>
              <div><label>Occupation:</label> <b>{profile.motherOcc}</b></div>
            </div>
          </div>
        </div>
      </div>
      {/* Academic Info */}
      <div style={{
        marginTop: 30, display: "flex", flexWrap: "wrap", gap: "16px"
      }}>
        <div style={{
          background: "#fff", borderRadius: "10px", boxShadow: "0 1.5px 5px #e4e6ee", padding: "24px", minWidth: "300px"
        }}>
          <h3>Academic Details</h3>
          <div>
            {academics.map(a => (
              <div key={a.label}>
                {a.label}: <b>{a.value}</b>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: "12px", margin: "36px 0 18px 0" }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{
            flex: 1,
            background: "#fff",
            borderRadius: "10px",
            textAlign: "center",
            padding: "18px 0",
            boxShadow: "0 1px 6px #d0d2e4"
          }}>
            <div style={{ fontSize: 28, color: "#1e2b4a" }}>{stat.value}</div>
            <div style={{ color: "#68708b", fontSize: 14, marginTop: 8 }}>{stat.label}</div>
          </div>
        ))}
      </div>
      {/* Tasks Table */}
      <div style={{
        background: "#fff", borderRadius: "12px", boxShadow: "0 1.5px 5px #e4e6ee", padding: "24px"
      }}>
        <h3>Task Overview</h3>
        <table style={{ width: "100%", marginTop: "16px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f7f9fc" }}>
              <th style={{ padding: "12px 6px", textAlign: "left" }}>Subject</th>
              <th style={{ padding: "12px 6px" }}>Date</th>
              <th style={{ padding: "12px 6px" }}>Department</th>
              <th style={{ padding: "12px 6px" }}>Status</th>
              <th style={{ padding: "12px 6px" }}>Marks</th>
              <th style={{ padding: "12px 6px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px 6px" }}>{task.subject}</td>
                <td style={{ padding: "10px 6px" }}>{task.date}</td>
                <td style={{ padding: "10px 6px" }}>{task.dept}</td>
                <td style={{ padding: "10px 6px" }}>
                  <span style={{
                    background: task.status === "Done" ? "#d2f8d2" : "#ffe3e3",
                    color: task.status === "Done" ? "#15ad15" : "#ce2525",
                    padding: "2px 8px",
                    borderRadius: "8px"
                  }}>
                    {task.status}
                  </span>
                </td>
                <td style={{ padding: "10px 6px" }}>{task.marks}</td>
                <td style={{ padding: "10px 6px" }}>
                  <a href="#" style={{
                    color: "#2838f2",
                    textDecoration: "underline"
                  }}>{task.action}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
