const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const conf = {
    isProd,
    apiPrefix: isProd ? 'https://s03x.coe.psu.ac.th/api' : 'http://localhost:1337/api',
}

export default conf;