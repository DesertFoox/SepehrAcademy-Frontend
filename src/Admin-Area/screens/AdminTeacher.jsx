import React, { useEffect, useState } from "react";
import { MDBDataTable, MDBBtn } from "../../Assets/mdbreact/mdbreact";
import getTermInf from "../../Components/services/api/course/term.api";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

import http from "../../Components/services/api/http-service.api";
import { toast } from "react-toastify"; import getTerms from "../../Components/services/api/course/term.api";

import { Link } from "react-router-dom";
const AdminCourse = () => {
    const [term, setTerm] = useState([]);

    const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

    const [teacher, setTeacher] = useState([]);

    const GetTeachers = async () => {
        const Teache = await getTerms();
        setTeacher(Teache);
    };
    const ConvertDateHandler = (date) => {
        const dateObj = new Date(date);

        const day = dateObj.getDate();
        const month = dateObj.getMonth();
        const year = dateObj.getFullYear();

        let newdate = year + "/" + month + "/" + day;
        return newdate;
    };

    const data = {
        columns: [
            {
                label: "نام معلم",
                field: "teachername",
                sort: "asc",
                width: 270,
            },
            {
                label: "کد معلم",
                field: "_id",
                sort: "asc",
                width: 200,
            },
            {
                label: "ایمیل معلم",
                field: "email",
                sort: "asc",
                width: 200,
            },

        ],
        rows: term.map((item) => ( console.log(item),{
            teachername: item.teacher.fullName,
            _id: item.teacher._id,
            email: item.teacher.email
            
        })),
    };

    const LoadTerm = async () => {
        const res = await getTermInf();
        setTerm(res);
    };

    const Deleteterm = async (myterm) => {
        const originalPosts = term;

        const posts = term.filter((p) => p._id !== myterm._id);
        setTerm(posts);

        try {
            await http.delete(MainUrl + "term/" + myterm._id);
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                toast.error("This post has already been deleted.");
            setTerm(originalPosts);
        }
    };

    useEffect(() => {
        LoadTerm();
        GetTeachers();
    }, []);
    return (
        <Card>
            <CardHeader>
                <CardTitle>دوره ها</CardTitle>

            </CardHeader>
            <CardBody>
                <div className="container">
                    <MDBDataTable responsive	 striped bordered small data={data} />
                </div>
            </CardBody>
        </Card>
    );
};

export default AdminCourse;