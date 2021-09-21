import Swal from 'sweetalert2'
const sweetalert2 = {
    methods: {
        $errorAlert(title = 'Error', text = 'Ocurrio un error lo sentimos') {
            Swal.fire({
                title,
                text,
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#1976d2'
            })
        }
    }
}
export default sweetalert2