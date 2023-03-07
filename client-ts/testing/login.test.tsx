import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Login from '../src/page/Login';

describe('LoginPage', () => {
    it('Check text_1 in pageLogin', () =>{
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        expect(screen.getByText('เข้าสู่บัญชีของคุณ')).toBeInTheDocument();
    })
    it('Check text_2 in pageLogin', () =>{
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        expect(screen.getByText('ยังไม่มีบัญชี?')).toBeInTheDocument();
    })
    it('Check text_3 in pageLogin', () =>{
        render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        expect(screen.getByText('ลงทะเบียนที่นี่')).toBeInTheDocument();
    })
})

