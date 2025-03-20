import React, { useState, useEffect } from 'react';

const FetchProjects = () => {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortType, setSortType] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('');
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');

    useEffect(() => {
        fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.log(error));
    }, []);

    const formatDate = (time) => {
        return new Date(time * 1000).toISOString().split('T')[0];
    };

    // Filtering and sorting logic
    const filteredProjects = projects
        .filter(project => project.ProjectName.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(project => (selectedCategory ? project.Department === selectedCategory : true))
        .filter(project => (selectedPriority ? project.priority === selectedPriority : true))
        .filter(project => (selectedStartDate ? formatDate(project.startDate) >= selectedStartDate : true))
        .filter(project => (selectedEndDate ? formatDate(project.EndDate) <= selectedEndDate : true))
        .sort((a, b) => {
            if (sortType === 'Name') {
                return a.ProjectName.localeCompare(b.ProjectName);
            } else if (sortType === 'Date') {
                return a.startDate - b.startDate;
            }
            return 0;
        });

    return (
        <>
            <h1 className="text-center mt-1">Project List</h1>

            {/* Buttons for filtering and sorting */}
            <div className="container mt-3">
                <div className="row mb-3">
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Project Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-control"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Data Science">Data Science</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-control"
                            value={selectedPriority}
                            onChange={(e) => setSelectedPriority(e.target.value)}
                        >
                            <option value="">All Priorities</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-control"
                            value={sortType}
                            onChange={(e) => setSortType(e.target.value)}
                        >
                            <option value="">Sort By</option>
                            <option value="Name">Sort By: Name</option>
                            <option value="Date">Sort By: Date</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label>Start Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            value={selectedStartDate}
                            onChange={(e) => setSelectedStartDate(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label>End Date:</label>
                        <input
                            type="date"
                            className="form-control"
                            value={selectedEndDate}
                            onChange={(e) => setSelectedEndDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Table */}
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="table-secondary">
                        <th scope="col"><strong>Sr.No</strong></th>
                        <th scope="col"><strong>Project Name</strong></th>
                        <th scope="col">Project Details</th>
                        <th scope="col"><strong>Priority</strong></th>
                        <th scope="col"><strong>Category</strong></th>
                        <th scope="col"><strong>Start Date</strong></th>
                        <th scope="col"><strong>End Date</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProjects.map((project, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td><b>{project.ProjectName}</b></td>
                            <td>{project.Details}</td>
                            <td>{project.priority}</td>
                            <td>{project.Department}</td>
                            <td>{formatDate(project.startDate)}</td>
                            <td>{formatDate(project.EndDate)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default FetchProjects;