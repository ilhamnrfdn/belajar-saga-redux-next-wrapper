## penggunaan NEXT REDUX WRAPPER, MIDDLEWARE REDUX SAGA AND REDUX
## NOTE: Bahwa middleware redux saga digunakan sebagai perantara dalam fetching data untuk masuk kedalam sebuah store management
1. Installing paket dari next redux, redux saga, & redux : yarn add redux redux saga react-redux next-redux-wrapper 
2. set up file store di dalam folder store sesuai dengan [dokumentasi] (https://github.com/kirill-konshin/next-redux-wrapper#usage-with-redux-saga)
3. set up next-redux-wrapper di file _app.js untuk mengkoneksikan store redux kedalam component
4. set up file root reducers sebagai tempat menyimpan store dalam 1 tempat yg nantinya akan di configurasi kedalam store index.
5. set up middleware saga untuk dikaitkan/dikonfigurasi kedalam middlewareapply redux. untuk cek [dokumentasi] (https://redux-saga.js.org/docs/introduction/BeginnerTutorial/)
6. urutan pemanggilan fetch api, dispatch/panggil fungsi/type dari actionya nanti akan diteruskan ke dalam fungsi middleware saga/workers dengan membawa/tidak sama sekali parameter kedalam fungsi saga middleware, dilanjut apabila yield call telah berhasil dan mendapatkan respon diteruskan kedalam yield put({type action fungsi, response data}) ketika pencarian dr yield put type yg dicari sesuai dengan fungsi actionnya maka data akan di teruskan kedalam store dan diolah didalamnya, ##note untuk penggunaan dari next redux wrapper ini setiap state yg ada harus memiliki statement HYDRATE sebelum memasukan data parameter yg ingin dilempar kedalam store, documentasinya bisa dilihat disini (https://github.com/kirill-konshin/next-redux-wrapper#usage)


## PENGGUNAAN NEXT-AUTH: 
note: gaktau kenapa kalo pake url dengan port selain 3000 kaga bisa konek.
- saat menggunakan getSession serverside jangan lupa untuk menempatkan session ke dalam return propsnya, karena jika tidak ketika kita ingin menggunakan data session di client data tidak bisa ke angkut.
1. set up sessionProvider untuk wrap component di dalam file _app
2. buat file [...nextauth].js didalam file api/auth dan lihat [dokumentasi] selanjutnya: https://next-auth.js.org/getting-started/example
3. untuk mengambil data session dari client menggunakan useSession, sedangkan untuk mengambil data session dari server bisa juga menggunakan getSession dan harus dipanggil didalam serversideprops, akan tetapi next-auth lebih merekomendasi menggunakan getServerSession

