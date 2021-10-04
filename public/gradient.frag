precision mediump float;

uniform float width;
uniform float height;
uniform float seed;

float rand(vec2 co) {
	return fract(sin(dot(co.xy, vec2(12.9898, 78.233)))*43758.5453);
}

vec3 mod289(vec3 x) {
	return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec2 mod289(vec2 x) {
	return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec3 permute(vec3 x) {
	return mod289(((x * 34.0) + 1.0) * x);
}
float snoise(vec2 v) {
	const vec4 C = vec4(0.211324865405187,
			0.366025403784439,
			-0.577350269189626,
			0.024390243902439);
	vec2 i = floor(v + dot(v, C.yy));
	vec2 x0 = v - i + dot(i, C.xx);
	vec2 i1;
	i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
	vec4 x12 = x0.xyxy + C.xxzz;
	x12.xy -= i1;
	i = mod289(i);
	vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) +
			i.x + vec3(0.0, i1.x, 1.0));
	vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
	m = m * m;
	m = m * m;
	vec3 x = 2.0 * fract(p * C.www) - 1.0;
	vec3 h = abs(x) - 0.5;
	vec3 ox = floor(x + 0.5);
	vec3 a0 = x - ox;
	m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
	vec3 g;
	g.x = a0.x * x0.x + h.x * x0.y;
	g.yz = a0.yz * x12.xz + h.yz * x12.yw;
	return 130.0 * dot(m, g);
}

vec3 hsl2rgb(in vec3 c) {
	vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
	return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
}

void main() {
	vec2 u_resolution = vec2(width, height);
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
	st.x *= u_resolution.x/u_resolution.y;
	float n = snoise(st + seed);

	float cs = snoise(st/7. + seed);
	vec3 c1 = hsl2rgb(vec3(cs, 1., 45./49.));
	vec3 c2 = hsl2rgb(vec3(cs + 1./7., 1., 45./49.));
	vec3 c = mix(c1, c2, n);

	gl_FragColor = vec4(c, (n*2./7. + rand(st)*1./7. + 4./7.));
	//gl_FragColor = vec4(c, snoise(st*n + seed)*3./7. + 4./7.);
}
