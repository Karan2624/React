export const Practice = () => {
    const students = [5,6];
    

    return (
        <>
        <p>{!Boolean(students.length) && "No students found"}</p>
        <p>students : {students.length}</p>
        </>
    )
}