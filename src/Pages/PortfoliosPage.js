import React, { useState } from 'react'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import portfolios from '../Data/portfolios'
import Menu from '../Components/Menu'
import Button from '../Components/Button'

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfoliosPage() {
    const [menuItem, setMenuItem] = useState(portfolios);
    const [button, setButton] = useState(allButtons);

    const filter = (button) => {

        if (button === 'All') {
            setMenuItem(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItem(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'portfolios'} />
            <InnerLayout>

                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
