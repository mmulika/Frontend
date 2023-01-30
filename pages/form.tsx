import type {NextPage} from 'next'

const [email, setEmail] = useState("")
const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await saveFormData({"email": email})
}
const Form: NextPage = () => {
    return <form action="/api/form" method="POST">
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" autoComplete="email" name="email" required={true}/>
        </div>
        <button>Submit</button>
    </form>
}
export default Form