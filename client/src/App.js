import logo from './signup-img.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="right-form">
            <div class="head">
                <p>로그인</p>
            </div>

            <div class="radio">
                <div class="tunner"><input type="radio" name="user" value="조율사" checked/>조율사</div>
                <div class="user"><input type="radio" name="user" value="사용자"/>사용자</div>
            </div>

            <div class="tuner-form" id="tuner-form">
                <form name="tuner-register-form" id="tuner-register-form" role="form" autocomplete="off">
                    <div class="name">
                        <p>이름</p>
                        <input type="text" name="name" placeholder="이름을 입력해주세요." required="required" />
                    </div>
                    <div class="email">
                        <p>이메일</p>
                        <input type="text" name="email" placeholder="이메일을 입력해주세요." required="required" />
                    </div>
                    <div class="password">
                        <p>비밀번호</p>
                        <input type="text" name="password" id="password" placeholder="비밀번호를 입력해주세요."
                            required="required" />
                    </div>
                    <div class="passwordcheck">
                        <p>비밀번호 확인</p>
                        <input type="text" name="passwordcheck" placeholder="비밀번호를 확인해주세요." required="required" />
                    </div>
                    <div class="phone-number">
                        <p>연락처</p>
                        <input type="text" name="phonenumber" placeholder="핸드폰 번호를 입력해주세요." required="required" />
                    </div>
                    <div class="location">
                        <p>활동 지역</p>
                        <select id="location1" name="location1">
                            <option value="piano">선택해주세요.</option>
                            <option value="seoul">서울</option>
                            <option value="busan">부산</option>
                            <option value="daegu">대구</option>
                            <option value="incheon">인천</option>
                            <option value="gwangju">광주</option>
                            <option value="daejeon">대전</option>
                            <option value="ulsan">울산</option>
                            <option value="sejong">세종</option>
                            <option value="gyeonggi">경기</option>
                            <option value="gangwon">강원</option>
                            <option value="chungbuk">충북</option>
                            <option value="chungnam">충남</option>
                            <option value="jeonbuk">전북</option>
                            <option value="jeonnam">전남</option>
                            <option value="gyeongbuk">경북</option>
                            <option value="gyeongnam">경남</option>
                            <option value="jeju">제주</option>
                        </select>
                        <select id="location2" name="location2">
                            <option value="piano">선택해주세요.</option>
                            <option value="seoul">서울</option>
                            <option value="busan">부산</option>
                            <option value="daegu">대구</option>
                            <option value="incheon">인천</option>
                            <option value="gwangju">광주</option>
                            <option value="daejeon">대전</option>
                            <option value="ulsan">울산</option>
                            <option value="sejong">세종</option>
                            <option value="gyeonggi">경기</option>
                            <option value="gangwon">강원</option>
                            <option value="chungbuk">충북</option>
                            <option value="chungnam">충남</option>
                            <option value="jeonbuk">전북</option>
                            <option value="jeonnam">전남</option>
                            <option value="gyeongbuk">경북</option>
                            <option value="gyeongnam">경남</option>
                            <option value="jeju">제주</option>
                        </select>
                    </div>

                    <div class="instrument">
                        <p>활동 악기</p>
                        <select name="instrument1" id="instrument1">
                            <option value="piano">선택해주세요.</option>
                            <option value="piano">피아노</option>
                            <option value="organ">오르간</option>
                            <option value="accordion">아코디언</option>
                            <option value="melodion">멜로디언</option>
                            <option value="harpsichord">하프시코드</option>
                            <option value="etc-key">건반악기</option>
                            <option value="oboe">오보에</option>
                            <option value="woodwind">목관 악기</option>
                            <option value="brass">금관 악기</option>
                            <option value="violin">바이올린</option>
                            <option value="viola">비올라</option>
                            <option value="cello">첼로</option>
                            <option value="string">콘트라베이스</option>
                            <option value="stringbass">현악기</option>
                        </select>
                        <select name="instrument2" id="instrument2">
                            <option value="piano">선택해주세요.</option>
                            <option value="piano">피아노</option>
                            <option value="organ">오르간</option>
                            <option value="accordion">아코디언</option>
                            <option value="melodion">멜로디언</option>
                            <option value="harpsichord">하프시코드</option>
                            <option value="etc-key">건반악기</option>
                            <option value="oboe">오보에</option>
                            <option value="woodwind">목관 악기</option>
                            <option value="brass">금관 악기</option>
                            <option value="violin">바이올린</option>
                            <option value="viola">비올라</option>
                            <option value="cello">첼로</option>
                            <option value="string">콘트라베이스</option>
                            <option value="stringbass">현악기</option>
                        </select>
                    </div>
                    <div class="content">
                        <p>소개글</p>
                        <textarea name="content" id="content" placeholder="소개글을 작성해주세요."></textarea>
                    </div>
                    <button class="signup-btn">Sign Up</button>
                </form>
            </div>
            
            <div class="user-form" id="user-form">
                <form name="user-register-form" id="user-register-form" role="form" autocomplete="off">
                    <div class="email">
                        <p>이메일</p>
                        <input type="text" name="email" placeholder="이메일을 입력해주세요." required="required"/>
                    </div>
                    <div class="name">
                        <p>이름</p>
                        <input type="text" name="name" placeholder="이름을 입력해주세요." required="required"/>
                    </div>
                    <div class="password">
                        <p>비밀번호</p>
                        <input type="text" id="password" name="password" placeholder="비밀번호를 입력해주세요." required="required"/>
                    </div>
                    <div class="password-check">
                        <p>비밀번호 확인</p>
                        <input type="text" name="passwordcheck" placeholder="비밀번호를 확인해주세요." required="required"/>
                    </div>
                    <div class="phone-number">
                        <p>전화번호</p>
                        <input type="text" name="phonenumber" placeholder="핸드폰 번호를 입력해주세요." required="required"/>
                    </div>
                </form>
                <button class="signup-btn">Sign Up</button>
            </div>
        </div>
        <div class="img">
            <img src={logo}/>
        </div>
    </div>
    </div>
  );
}

export default App;
