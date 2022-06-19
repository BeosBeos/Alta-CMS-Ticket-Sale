import { FC } from 'react';

export const HomeIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 8.00001L14 2.74001C13.45 2.24805 12.7379 1.97607 12 1.97607C11.262 1.97607 10.55 2.24805 9.99997 2.74001L3.99997 8.00001C3.68234 8.28408 3.42887 8.63256 3.25644 9.02225C3.08402 9.41194 2.99659 9.83389 2.99997 10.26V19C2.99997 19.7957 3.31604 20.5587 3.87865 21.1213C4.44126 21.6839 5.20432 22 5.99997 22H18C18.7956 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7957 21 19V10.25C21.0019 9.82557 20.9138 9.40555 20.7414 9.01769C20.5691 8.62983 20.3163 8.28296 20 8.00001V8.00001ZM14 20H9.99997V15C9.99997 14.7348 10.1053 14.4804 10.2929 14.2929C10.4804 14.1054 10.7348 14 11 14H13C13.2652 14 13.5195 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15V20ZM19 19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5195 19.8946 18.2652 20 18 20H16V15C16 14.2044 15.6839 13.4413 15.1213 12.8787C14.5587 12.3161 13.7956 12 13 12H11C10.2043 12 9.44126 12.3161 8.87865 12.8787C8.31604 13.4413 7.99997 14.2044 7.99997 15V20H5.99997C5.73476 20 5.4804 19.8946 5.29287 19.7071C5.10533 19.5196 4.99997 19.2652 4.99997 19V10.25C5.00015 10.108 5.03057 9.9677 5.08919 9.83839C5.14781 9.70907 5.2333 9.59372 5.33997 9.50001L11.34 4.25001C11.5225 4.08969 11.7571 4.00127 12 4.00127C12.2429 4.00127 12.4775 4.08969 12.66 4.25001L18.66 9.50001C18.7666 9.59372 18.8521 9.70907 18.9108 9.83839C18.9694 9.9677 18.9998 10.108 19 10.25V19Z"
                fill="white"
            />
        </svg>
    );
};

export const TicketIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.6">
                <path
                    d="M9 10C8.73478 10 8.48043 10.1054 8.29289 10.2929C8.10536 10.4804 8 10.7348 8 11V13C8 13.2652 8.10536 13.5196 8.29289 13.7071C8.48043 13.8946 8.73478 14 9 14C9.26522 14 9.51957 13.8946 9.70711 13.7071C9.89464 13.5196 10 13.2652 10 13V11C10 10.7348 9.89464 10.4804 9.70711 10.2929C9.51957 10.1054 9.26522 10 9 10ZM21 11C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V6C22 5.73478 21.8946 5.48043 21.7071 5.29289C21.5196 5.10536 21.2652 5 21 5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11C3.26522 11 3.51957 11.1054 3.70711 11.2929C3.89464 11.4804 4 11.7348 4 12C4 12.2652 3.89464 12.5196 3.70711 12.7071C3.51957 12.8946 3.26522 13 3 13C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V18C2 18.2652 2.10536 18.5196 2.29289 18.7071C2.48043 18.8946 2.73478 19 3 19H21C21.2652 19 21.5196 18.8946 21.7071 18.7071C21.8946 18.5196 22 18.2652 22 18V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13C20.7348 13 20.4804 12.8946 20.2929 12.7071C20.1054 12.5196 20 12.2652 20 12C20 11.7348 20.1054 11.4804 20.2929 11.2929C20.4804 11.1054 20.7348 11 21 11ZM20 9.18C19.4208 9.3902 18.9205 9.77363 18.5668 10.2782C18.2132 10.7827 18.0235 11.3839 18.0235 12C18.0235 12.6161 18.2132 13.2173 18.5668 13.7218C18.9205 14.2264 19.4208 14.6098 20 14.82V17H10C10 16.7348 9.89464 16.4804 9.70711 16.2929C9.51957 16.1054 9.26522 16 9 16C8.73478 16 8.48043 16.1054 8.29289 16.2929C8.10536 16.4804 8 16.7348 8 17H4V14.82C4.57915 14.6098 5.07954 14.2264 5.43316 13.7218C5.78678 13.2173 5.97648 12.6161 5.97648 12C5.97648 11.3839 5.78678 10.7827 5.43316 10.2782C5.07954 9.77363 4.57915 9.3902 4 9.18V7H8C8 7.26522 8.10536 7.51957 8.29289 7.70711C8.48043 7.89464 8.73478 8 9 8C9.26522 8 9.51957 7.89464 9.70711 7.70711C9.89464 7.51957 10 7.26522 10 7H20V9.18Z"
                    fill="#1E0D03"
                />
            </g>
        </svg>
    );
};

export const InvoiceIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.6">
                <path
                    d="M13 15.9999H7.00001C6.73479 15.9999 6.48044 16.1053 6.2929 16.2928C6.10537 16.4804 6.00001 16.7347 6.00001 16.9999C6.00001 17.2652 6.10537 17.5195 6.2929 17.7071C6.48044 17.8946 6.73479 17.9999 7.00001 17.9999H13C13.2652 17.9999 13.5196 17.8946 13.7071 17.7071C13.8947 17.5195 14 17.2652 14 16.9999C14 16.7347 13.8947 16.4804 13.7071 16.2928C13.5196 16.1053 13.2652 15.9999 13 15.9999ZM9.00001 9.99995H11C11.2652 9.99995 11.5196 9.89459 11.7071 9.70705C11.8947 9.51952 12 9.26516 12 8.99995C12 8.73473 11.8947 8.48038 11.7071 8.29284C11.5196 8.1053 11.2652 7.99995 11 7.99995H9.00001C8.73479 7.99995 8.48044 8.1053 8.2929 8.29284C8.10537 8.48038 8.00001 8.73473 8.00001 8.99995C8.00001 9.26516 8.10537 9.51952 8.2929 9.70705C8.48044 9.89459 8.73479 9.99995 9.00001 9.99995ZM21 11.9999H18V2.99995C18.0007 2.82374 17.9548 2.65047 17.867 2.49769C17.7792 2.34491 17.6526 2.21805 17.5 2.12995C17.348 2.04218 17.1755 1.99597 17 1.99597C16.8245 1.99597 16.652 2.04218 16.5 2.12995L13.5 3.84995L10.5 2.12995C10.348 2.04218 10.1755 1.99597 10 1.99597C9.82447 1.99597 9.65203 2.04218 9.50001 2.12995L6.50001 3.84995L3.50001 2.12995C3.34799 2.04218 3.17554 1.99597 3.00001 1.99597C2.82447 1.99597 2.65203 2.04218 2.50001 2.12995C2.3474 2.21805 2.22079 2.34491 2.13299 2.49769C2.04518 2.65047 1.99931 2.82374 2.00001 2.99995V18.9999C2.00001 19.7956 2.31608 20.5587 2.87869 21.1213C3.4413 21.6839 4.20436 21.9999 5.00001 21.9999H19C19.7957 21.9999 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 18.9999V12.9999C22 12.7347 21.8947 12.4804 21.7071 12.2928C21.5196 12.1053 21.2652 11.9999 21 11.9999ZM5.00001 19.9999C4.73479 19.9999 4.48044 19.8946 4.2929 19.7071C4.10536 19.5195 4.00001 19.2652 4.00001 18.9999V4.72995L6.00001 5.86995C6.15435 5.95056 6.32589 5.99266 6.50001 5.99266C6.67413 5.99266 6.84567 5.95056 7.00001 5.86995L10 4.14995L13 5.86995C13.1543 5.95056 13.3259 5.99266 13.5 5.99266C13.6741 5.99266 13.8457 5.95056 14 5.86995L16 4.72995V18.9999C16.0027 19.3411 16.0636 19.6793 16.18 19.9999H5.00001ZM20 18.9999C20 19.2652 19.8947 19.5195 19.7071 19.7071C19.5196 19.8946 19.2652 19.9999 19 19.9999C18.7348 19.9999 18.4804 19.8946 18.2929 19.7071C18.1054 19.5195 18 19.2652 18 18.9999V13.9999H20V18.9999ZM13 11.9999H7.00001C6.73479 11.9999 6.48044 12.1053 6.2929 12.2928C6.10537 12.4804 6.00001 12.7347 6.00001 12.9999C6.00001 13.2652 6.10537 13.5195 6.2929 13.7071C6.48044 13.8946 6.73479 13.9999 7.00001 13.9999H13C13.2652 13.9999 13.5196 13.8946 13.7071 13.7071C13.8947 13.5195 14 13.2652 14 12.9999C14 12.7347 13.8947 12.4804 13.7071 12.2928C13.5196 12.1053 13.2652 11.9999 13 11.9999Z"
                    fill="#1E0D03"
                />
            </g>
        </svg>
    );
};

export const SettingIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.6">
                <path
                    d="M19.9 12.66C19.7397 12.4775 19.6513 12.2429 19.6513 12C19.6513 11.7571 19.7397 11.5225 19.9 11.34L21.18 9.90002C21.3211 9.74269 21.4087 9.54472 21.4302 9.33452C21.4518 9.12433 21.4062 8.9127 21.3 8.73002L19.3 5.27002C19.1949 5.08754 19.0349 4.94289 18.8428 4.8567C18.6506 4.77051 18.4362 4.74718 18.23 4.79002L16.35 5.17002C16.1108 5.21945 15.8618 5.17961 15.6499 5.05802C15.438 4.93643 15.278 4.7415 15.2 4.51002L14.59 2.68002C14.5229 2.4814 14.3951 2.30888 14.2246 2.18686C14.0542 2.06484 13.8497 1.99948 13.64 2.00002H9.64002C9.42195 1.98864 9.20615 2.04894 9.02558 2.17173C8.84501 2.29452 8.7096 2.47304 8.64002 2.68002L8.08002 4.51002C8.00202 4.7415 7.84199 4.93643 7.63013 5.05802C7.41827 5.17961 7.16924 5.21945 6.93002 5.17002L5.00002 4.79002C4.80457 4.7624 4.60532 4.79324 4.42737 4.87866C4.24941 4.96407 4.10072 5.10025 4.00002 5.27002L2.00002 8.73002C1.89118 8.91067 1.84224 9.1211 1.8602 9.33124C1.87816 9.54138 1.9621 9.74046 2.10002 9.90002L3.37002 11.34C3.53034 11.5225 3.61875 11.7571 3.61875 12C3.61875 12.2429 3.53034 12.4775 3.37002 12.66L2.10002 14.1C1.9621 14.2596 1.87816 14.4587 1.8602 14.6688C1.84224 14.8789 1.89118 15.0894 2.00002 15.27L4.00002 18.73C4.10512 18.9125 4.26514 19.0571 4.45727 19.1433C4.6494 19.2295 4.86384 19.2529 5.07002 19.21L6.95002 18.83C7.18924 18.7806 7.43827 18.8204 7.65013 18.942C7.86199 19.0636 8.02202 19.2585 8.10002 19.49L8.71002 21.32C8.7796 21.527 8.91501 21.7055 9.09558 21.8283C9.27615 21.9511 9.49195 22.0114 9.71002 22H13.71C13.9197 22.0006 14.1242 21.9352 14.2946 21.8132C14.4651 21.6912 14.5929 21.5186 14.66 21.32L15.27 19.49C15.348 19.2585 15.508 19.0636 15.7199 18.942C15.9318 18.8204 16.1808 18.7806 16.42 18.83L18.3 19.21C18.5062 19.2529 18.7206 19.2295 18.9128 19.1433C19.1049 19.0571 19.2649 18.9125 19.37 18.73L21.37 15.27C21.4762 15.0873 21.5218 14.8757 21.5002 14.6655C21.4787 14.4553 21.3911 14.2573 21.25 14.1L19.9 12.66ZM18.41 14L19.21 14.9L17.93 17.12L16.75 16.88C16.0298 16.7328 15.2806 16.8551 14.6446 17.2238C14.0086 17.5925 13.5302 18.1819 13.3 18.88L12.92 20H10.36L10 18.86C9.76987 18.1619 9.2914 17.5725 8.65542 17.2038C8.01945 16.8351 7.27024 16.7128 6.55002 16.86L5.37002 17.1L4.07002 14.89L4.87002 13.99C5.36197 13.44 5.63395 12.7279 5.63395 11.99C5.63395 11.2521 5.36197 10.54 4.87002 9.99002L4.07002 9.09002L5.35002 6.89002L6.53002 7.13002C7.25024 7.27724 7.99945 7.1549 8.63542 6.78622C9.2714 6.41753 9.74987 5.82818 9.98002 5.13002L10.36 4.00002H12.92L13.3 5.14002C13.5302 5.83818 14.0086 6.42753 14.6446 6.79622C15.2806 7.1649 16.0298 7.28724 16.75 7.14002L17.93 6.90002L19.21 9.12002L18.41 10.02C17.9236 10.5688 17.655 11.2767 17.655 12.01C17.655 12.7433 17.9236 13.4513 18.41 14ZM11.64 8.00002C10.8489 8.00002 10.0755 8.23461 9.41774 8.67414C8.75994 9.11366 8.24725 9.73838 7.9445 10.4693C7.64175 11.2002 7.56254 12.0045 7.71688 12.7804C7.87122 13.5563 8.25218 14.269 8.81159 14.8284C9.371 15.3879 10.0837 15.7688 10.8597 15.9232C11.6356 16.0775 12.4398 15.9983 13.1708 15.6955C13.9017 15.3928 14.5264 14.8801 14.9659 14.2223C15.4054 13.5645 15.64 12.7911 15.64 12C15.64 10.9392 15.2186 9.92174 14.4684 9.17159C13.7183 8.42144 12.7009 8.00002 11.64 8.00002ZM11.64 14C11.2445 14 10.8578 13.8827 10.5289 13.663C10.2 13.4432 9.94363 13.1308 9.79226 12.7654C9.64088 12.3999 9.60128 11.9978 9.67845 11.6098C9.75562 11.2219 9.9461 10.8655 10.2258 10.5858C10.5055 10.3061 10.8619 10.1156 11.2498 10.0384C11.6378 9.96128 12.0399 10.0009 12.4054 10.1523C12.7708 10.3036 13.0832 10.56 13.303 10.8889C13.5227 11.2178 13.64 11.6045 13.64 12C13.64 12.5304 13.4293 13.0392 13.0542 13.4142C12.6792 13.7893 12.1705 14 11.64 14Z"
                    fill="#1E0D03"
                />
            </g>
        </svg>
    );
};

export const SearchIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M23.7067 22.2937L16.8818 15.4688C18.2038 13.8358 18.9998 11.7608 18.9998 9.50089C18.9998 4.26295 14.7378 0.000976562 9.49986 0.000976562C4.26192 0.000976562 0 4.2629 0 9.50084C0 14.7388 4.26197 19.0008 9.49991 19.0008C11.7599 19.0008 13.8349 18.2048 15.4678 16.8828L22.2928 23.7077C22.4878 23.9027 22.7437 24.0007 22.9998 24.0007C23.2558 24.0007 23.5118 23.9027 23.7068 23.7077C24.0978 23.3167 24.0978 22.6847 23.7067 22.2937ZM9.49991 17.0008C5.36394 17.0008 1.99999 13.6368 1.99999 9.50084C1.99999 5.36487 5.36394 2.00092 9.49991 2.00092C13.6359 2.00092 16.9998 5.36487 16.9998 9.50084C16.9998 13.6368 13.6358 17.0008 9.49991 17.0008Z"
                fill="#1E0D03"
            />
        </svg>
    );
};

export const EmailIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.8">
                <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="#1E0D03"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M22 6L12 13L2 6"
                    stroke="#1E0D03"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
        </svg>
    );
};

export const NotificationIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.8">
                <path
                    d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                    stroke="#1E0D03"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                    stroke="#1E0D03"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
        </svg>
    );
};

export const CalendarIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="#FF993C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M3 10H21" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 2V6" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 2V6" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export const FilterIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
                stroke="#FF993C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const ClockIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                fill="#FF993C"
            />
        </svg>
    );
};

export const EditIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                stroke="#FF993C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                stroke="#FF993C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
