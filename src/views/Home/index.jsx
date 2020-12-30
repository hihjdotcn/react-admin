import PageTemplate from '../../components/PageTemplate/index.jsx'
import {Component} from 'react'
import { Button } from 'element-react'
import 'element-theme-default'

class Home extends Component {
    render () {
        return (
            <PageTemplate>
                <section>
                    <h1>Home page</h1>
                    <Button type="primary">Hello</Button>
                </section>
            </PageTemplate>
        )
    }
}

export default Home